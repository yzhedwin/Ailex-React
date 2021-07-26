import React, {useState} from "react";
import ReactDOM from 'react-dom';
import Title from '../components/Gram/Title'
import ImageGrid from '../components/Gram/ImageGrid'
import Modal from '../components/Gram/Modal'
import UploadForm from '../components/Gram/UploadForm'
import '../gallary.css'

ReactDOM.render(
  <React.StrictMode>
    <Gallary />
  </React.StrictMode>,
  document.getElementById('root')
);

function Gallary() {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
      
      <div className="Gallary">
        <Title/>
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
        { selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </div>
    );
  }
  
  export default Gallary;