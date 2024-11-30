import React,{useState} from 'react'

const AddDesignation = () => {

    const [formData, setFormData] = useState({
        designationName: "",
        designationDescription: "",
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
        console.log("Degreedata:", formData);
       
      };

  return (

    


    <div className="container">
    <form onSubmit={handleSubmit}>


   

 
  <div className="mb-3">
          <label htmlFor=" designationName" className="form-label">Designation Name</label>
          <input
            type="text"
            className="form-control"
            id=" designationName"
            name=" designationName"
            value={formData.designationName}
            onChange={handleChange}
            required
          />
        </div>

      

        <div className="mb-3">
          <label htmlFor="designationDescription" className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            id="designationDescription"
            name="designationDescription"
            value={formData.designationDescription}
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

export default AddDesignation