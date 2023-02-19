import axios from "axios";
const api = require("../API.json");

const Admin = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const type = e.target.type.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const wine_type = e.target.wine_type.value;
    const origin = e.target.origin.value;
    const abv = e.target.abv.value;
    const image_path = e.target.image_path.value;

    axios.post(api.product, {
      name,
      type,
      price,
      description,
      wine_type,
      origin,
      abv,
      image_path,
    });
  };

  return (
    <>
      <h5>Admin</h5>
      <br></br>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>Name</label>
          <input name="name" type="text" placeholder="String" />
        </div>
        <div>
          <label>Type</label>
          <input name="type" type="text" placeholder="String" />
        </div>
        <div>
          <label>Price</label>
          <input name="price" type="number" placeholder="Number" />
        </div>
        <div>
          <label>Description</label>
          <input name="description" type="text" placeholder="String" />
        </div>
        <div>
          <label>Wine_type</label>
          <input name="wine_type" type="text" placeholder="String" />
        </div>
        <div>
          <label>Origin</label>
          <input name="origin" type="text" placeholder="String" />
        </div>
        <div>
          <label>Abv</label>
          <input name="abv" type="number" placeholder="Number" />
        </div>
        <div>
          <label>Image_path</label>
          <input name="image_path" type="text" placeholder="String" />
        </div>

        <input type="submit" value="저장" />
      </form>
      <br></br>
    </>
  );
};

export default Admin;
