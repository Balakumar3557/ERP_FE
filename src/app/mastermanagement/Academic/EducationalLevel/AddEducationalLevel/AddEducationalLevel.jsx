import React,{useState} from 'react'


const AddEducationalLevel = () => {

    const [formData, setFormData] = useState({
        educationLevelName: "",
        educationDescription: "",
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
          <label htmlFor="educationName" className="form-label">Educational Level Name</label>
          <input
            type="text"
            className="form-control"
            id="educationName"
            name="educationLevelName"
            value={formData.educationLevelName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="educationDescription" className="form-label">Educational Description</label>
          <input
            type="text"
            className="form-control"
            id="educationDescription"
            name="educationDescription"
            value={formData.educationDescription}
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

export default AddEducationalLevel