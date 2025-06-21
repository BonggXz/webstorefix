import { useRef } from "react";
export default function ImageUpload({ value, onChange }) {
  const ref = useRef();
  const handleFile = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => onChange(reader.result);
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <input ref={ref} type="file" accept="image/*" className="hidden" onChange={handleFile} />
      <button className="btn px-3 py-2 glass border" onClick={() => ref.current.click()}>Upload Gambar</button>
      {value && <img src={value} className="mt-2 w-24 h-24 object-cover rounded" alt="Preview" />}
    </div>
  );
}
