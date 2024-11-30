import React,{useState} from "react";



const AddDepartment = () => {


    const [formData, setFormData] = useState({
        selectEducation:"UG",
        selectDegree:"",
        departmentName: "",
        departmentCode: "",
        departmentDescription: "",
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
     <div className="row">
      <div className="col-md-6">
       <div className="mb-3">
          <label htmlFor="selectEducation" className="form-label">Select Educational Level</label>
          <select
            className="form-select"
            id="selectEducation"
            name="selectEducation"
            value={formData.selectEducation}
            onChange={handleChange}
          >
            <option value="UG">UG</option>
            <option value="PG">PG</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="selectDegree" className="form-label">Select Degree</label>
          <select
            className="form-select"
            id="selectDegree"
            name="selectDegree"
            value={formData.selectDegree}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>


        <div className="mb-3">
          <label htmlFor="departmentName" className="form-label">Department Name</label>
          <input
            type="text"
            className="form-control"
            id="departmentName"
            name="departmentName"
            value={formData.departmentName}
            onChange={handleChange}
            required
          />
        </div>
    </div>
    <div className="col-md-6">
        <div className="mb-3">
          <label htmlFor="departmentCode" className="form-label">Department Code</label>
          <input
            type="text"
            className="form-control"
            id="departmentCode"
            name="departmentCode"
            value={formData.departmentCode}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="departmentDescription" className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            id="departmentDescription"
            name="departmentDescription"
            value={formData.departmentDescription}
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
      </div>

      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-primary">Submit</button>
        </div> 
      </form>
    </div>
  )
}

export default AddDepartment