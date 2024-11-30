import React,{useState} from 'react'

const AddSection = () => {

    const [formData, setFormData] = useState({
        sectionName: "",
        sectionDescription: "",
        status: "active",
      });
    
     const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("sectionData:", formData);
       
      };


  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="sectionName" className="form-label">Section Name</label>
          <input
            type="text"
            className="form-control"
            id="sectionName"
            name="sectionName"
            value={formData.sectionName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="sectionDescription" className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            id="sectionDescription"
            name="sectionDescription"
            value={formData.sectionDescription}
            onChange={handleChange}
            required
          />
        </div>

      
        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status</label>
          <select
            className="form-select"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default AddSection