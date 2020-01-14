import React from "react";
import ReactDOM from "react-dom";
import { ModalBackground, ModalStyles } from "../styles/styles";

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <ModalBackground onClick={hide} />
          <ModalStyles aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
              <div className="modal--header">
                <button
                  type="button"
                  className="modal--close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <p>
                Unfortunately, Google doesn't make any of this information
                available via an API, so in order for this to work, you'll need
                to download your Google Play Music Activty History. In order to
                do that, you can do the following:
              </p>
              <ul>
                <li>
                  Go to{" "}
                  <a href="https://takeout.google.com/">
                    https://takeout.google.com/
                  </a>
                </li>
                <li>
                  Under the "Create A New Archive" section, first make sure you
                  click "Deselect All"
                </li>
                <li>
                  Then, scroll until you see something labelled "My Activity"
                  (NOTE: NOT GOOGLE PLAY MUSIC) and check the box
                </li>
                <li>
                  Click on "Multiple Formats" and change the dropdown from
                  "HTML" to "JSON", and click OK
                </li>
                <li>Click on "All activity data included"</li>
                <li>
                  Click "Deselect all" and then look through the list for
                  "Google Play Music", and click OK
                </li>
                <li>Scroll to the bottom and click "Next step"</li>
                <li>
                  You can keep all of these options default, then click on
                  "Create Archive"
                </li>
                <li>
                  In a few minutes, you'll receive an email with a link to
                  download the JSON file of your listening history to use here!
                </li>
              </ul>
              <p>
                Inspired by{" "}
                <a href="https://github.com/Lolincolc/gmusic_wrapped">
                  https://github.com/Lolincolc/gmusic_wrapped
                </a>
              </p>
            </div>
          </ModalStyles>
        </>,
        document.body
      )
    : null;

export default Modal;
