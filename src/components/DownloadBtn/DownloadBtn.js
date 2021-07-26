/* import { useState } from 'react';
import storage from './firebase';

storageRef.child('.jpg').getDownloadURL()
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      var blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();

  return (
    <div className="App" style={{ marginTop: 250 }}>
      <center>
        <input type="file" 
        onChange={(e) => { setImage(e.target.files[0]) }} />
        <button onClick={download}>Download</button>
        <br />
        <p><a href={Url}>{Url}</a></p>
      </center>
    </div>
  );
}
  
export default App;
*/