import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

export function Updates() {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <div className="flex min-w-0">
        <img
          src={file.preview}
          className="flex justify-items-center p-6"
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <section>
      <div {...getRootProps({})}>
        <input {...getInputProps()} />
        <div className="min-h-12 flex justify-center border-4 border-dashed border-black bg-blue-gray-400 py-32">
          Drag 'n' drop some files here, or click to select files
        </div>
      </div>
      <aside className="flex flex-row flex-wrap justify-between pt-6">
        {thumbs}
      </aside>
    </section>
  );
}

export default Updates;
