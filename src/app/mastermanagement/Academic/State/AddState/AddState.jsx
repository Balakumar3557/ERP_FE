import React,{useState} from "react";



const AddState = () => {


    const [formData, setFormData] = useState({
        stateName: "",
        stateDescription: "",
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
        console.log("stateData:", formData);
       
      };



  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="stateName" className="form-label">State Name</label>
          <input
            type="text"
            className="form-control"
            id="stateName"
            name="stateName"
            value={formData.stateName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="stateDescription" className="form-label">State Description</label>
          <input
            type="text"
            className="form-control"
            id="stateDescription"
            name="stateDescription"
            value={formData.stateDescription}
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

export default AddState;