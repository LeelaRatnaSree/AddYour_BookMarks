import React, { Component } from 'react';
import Card from './Card';

class AddNewBookMark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [] // Initialize an array to store bookmarks
    };
  }

  handleAddBookmark = async () => {
    const bookmark = document.getElementById('newbookmark').value; // Get the value from the textarea
    const extractedWord = this.extractWordFromLink(bookmark); // Extract word from the link

    try {
      // Capture the screen
      const screenCapture = await this.captureScreen();

      // Create a new bookmark object
      const newBookmark = {
        bookmark: bookmark,
        extractedWord: extractedWord,
        screenCapture: screenCapture // Add the screen capture to the bookmark object
      };

      // Add the new bookmark to the array of bookmarks in the state
      this.setState(prevState => ({
        bookmarks: [...prevState.bookmarks, newBookmark]
      }));
    } catch (error) {
      console.error('Error capturing screen:', error);
    }
  };

  captureScreen = async () => {
    try {
      // Capture the screen using an appropriate method (e.g., using a browser extension or a third-party library)
      // For simplicity, this example uses a placeholder value
      const screenCapture = 'placeholder-base64-encoded-image';
      return screenCapture;
    } catch (error) {
      throw new Error('Failed to capture screen:', error);
    }
  };

  extractWordFromLink = (link) => {
    // Extracting word from the link based on "http://" or "www."
    const httpIndex = link.indexOf("https://");
    const wwwIndex = link.indexOf("www.");
    let startIndex;
    if (httpIndex !== -1) {
      startIndex = httpIndex + 8; // Length of "https://"
    } else if (wwwIndex !== -1) {
      startIndex = wwwIndex + 4; // Length of "www."
    } else {
      // If neither "https://" nor "www." is found, return an empty string
      return 'not found';
    }

    const nextSlashIndex = link.indexOf("/", startIndex);
    if (nextSlashIndex !== -1) {
      return link.substring(startIndex, nextSlashIndex);
    } else {
      return link.substring(startIndex);
    }
  };

  render() {
    return (
      <div>
        <div className="my-0" style={{ paddingLeft: '280px', border: '2px solid black', backgroundColor: '#c6c1cf', paddingBottom: '480px' }}>
          <div className="my-5 mx-5 form-floating mb-5" style={{ width: '60%', border: '2px solid black' }}>
            <textarea className="form-control" placeholder="Leave a comment here" id="newbookmark"></textarea>
            <label htmlFor="email">Enter bookmark</label>
          </div>
          <div style={{ paddingLeft: '350px', fontSize: 25, paddingBottom: '50px' }}>
            <button type="button" className="btn btn-outline-dark btn-lg" style={{ backgroundColor: '#42618f', textDecoration: 'none' }} id="loginButton" onClick={this.handleAddBookmark}>Add </button>
          </div>
          {/* Map over the array of bookmarks and render each card */}
          <div className="row" >
            {this.state.bookmarks.map((bookmarkObj, index) => (
              <div className="p-2 col-md-4" key={index}>
                <Card bookmark={bookmarkObj.bookmark} extractedWord={bookmarkObj.extractedWord} screenCapture={bookmarkObj.screenCapture} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default AddNewBookMark;
