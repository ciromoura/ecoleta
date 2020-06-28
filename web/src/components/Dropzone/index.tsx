import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';

import './styles.css';

interface Props {
    onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
    const [selectedFileUrl, setSelecetdFileUrl] = useState('');

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];

        const fileUrl = URL.createObjectURL(file);

        setSelecetdFileUrl(fileUrl);
        onFileUploaded(file);

    }, [onFileUploaded])

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' })

    return (
        <div className="dropzone" {...getRootProps()}>
            <input {...getInputProps()} accept="image/*" />

            {selectedFileUrl
                ? <img src={selectedFileUrl} alt="Point thumbmail" />
                : (
                    <p>
                        <FiUpload />
                        Imagem do estabelecimento
                    </p>
                )
            }

        </div>
    )
}

export default Dropzone;