import React, { useState } from "react"
import PropType from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/projectLayout"
import Modal from "react-modal"

const passWordProtectedSlugs = [
  "moody-gardens-aquarium",
  "melab-gallery-in-the-phillip-and-patricia-frost-museum-of-science",
  "canadian-museum-for-human-rights",
]

const PostTemplate = props => {
  console.log(props)
  const {
    data: { wordpressPost: post },
  } = props
  const [modalIsOpen, setModalIsOpen] = useState(
    passWordProtectedSlugs.includes(props.data.wordpressPost.slug)
  )
  const [password, setPassword] = useState("")

  // function onOpenModal() {
  //   setModalIsOpen(true)
  // }
  function onCloseModal() {
    setModalIsOpen(false)
  }
  // function handleSubmit(e) {
  //   if (password === 'mary') {
  //     onCloseModal()
  //   }
  // }

  return (
    <Layout>
      <Helmet
        title={post.title}
        meta={[{ name: "description", content: post.excerpt }]}
      />
      <section dangerouslySetInnerHTML={{ __html: post.content }} />
      {password !== "mary" && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={onCloseModal}
          shouldCloseOnOverlayClick={false}
          shouldCloseOnEsc={false}
        >
          <p>
            This page is password protected. Please enter the password below to
            veiw the content.
          </p>
          <form>
            <input
              type="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </form>
        </Modal>
      )}
    </Layout>
  )
}

PostTemplate.propTypes = {
  data: PropType.shape({}).isRequired,
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      excerpt
      date(formatString: "DD, MMM YYYY")
      categories {
        id
        name
      }
      slug
      featured_media {
        localFile {
          publicURL
          childImageSharp {
            id
            fixed {
              srcSet
              src
            }
          }
        }
      }
    }
  }
`
