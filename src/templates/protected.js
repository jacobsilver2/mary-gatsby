import React, { useState } from "react"
import PropType from "prop-types"
import { Router } from "@reach/router"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/projectLayout"
import Modal from "react-modal"
import styled, {createGlobalStyle} from 'styled-components';
import Login from "../components/login"
import PrivateRoute from '../components/privateRoute';
import Profile from "../components/profile"



// function ReactModalAdapter ({ className, ...props }) {
//   const contentClassName = `${className}__content`;
//   const overlayClassName = `${className}__overlay`;
//   return (
//     <Modal
//       portalClassName={className}
//       className={contentClassName}
//       overlayClassName={overlayClassName}
//       htmlOpenClassName='ReactModal__Html--open'
//       {...props}
//     />
//   )
// }

// const StyledModal = styled(ReactModalAdapter)`
  
//   &__overlay {
//     position: fixed;
//     top: 0px;
//     left: 0px;
//     right: 0px;
//     bottom: 0px;
//     background-color: rgba(128, 128, 128, 0.99);
//   }

//   &__content {
//     font-family: 'fertigo-pro', serif;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     right: auto;
//     bottom: auto;
//     margin-right: -50%;
//     transform: translate(-50%, -50%);
//     border: 1px solid #ccc;
//     background: #fff;
//     overflow: auto;
//     -webkit-overflow-scrolling: touch;
//     borderRadius: 4px;
//     outline: none;
//     padding: 20px;
//     &.ReactModal__Body--open {
//       position: static;
//       overflow-y: scroll;
//     }

//     &.ReactModal__Html--open {
//       overflow-y: hidden;
//     }
//   }

// `;

// const passWordProtectedSlugs = [
//   "moody-gardens-aquarium",
//   "melab-gallery-in-the-phillip-and-patricia-frost-museum-of-science",
//   "canadian-museum-for-human-rights",
// ]

const PostTemplate = props => {
  const {
    data: { wordpressPost: post },
  } = props
  // const [modalIsOpen, setModalIsOpen] = useState(
  //   passWordProtectedSlugs.includes(props.data.wordpressPost.slug)
  // )
  // const [password, setPassword] = useState("")

  // function onCloseModal() {
  //   setModalIsOpen(false)
  // }

  return (
    <Layout>
      <Helmet
        title={post.title}
        meta={[{ name: "description", content: post.excerpt }]}
      />
      <div>THIS WILL BE A PASSWORD PROTECTED PAGE</div>
      {/* <Router>
        <Login path="/login"/>
        <PrivateRoute path="/app/profile" component={Profile} />
      </Router> */}
      <section dangerouslySetInnerHTML={{ __html: post.content }} />
      {/* {password !== "mary" && (
        <StyledModal
          isOpen={modalIsOpen}
          onRequestClose={onCloseModal}
          shouldCloseOnOverlayClick={false}
          shouldCloseOnEsc={false}
          htmlOpenClassName='ReactModal__Html--open'
        >
          <p>
            This page is password protected. Please enter the password below to
            veiw the content.
          </p>
          <form style={{textAlign: 'center'}}>
            <input
              type="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </form>
        </StyledModal> */}
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
