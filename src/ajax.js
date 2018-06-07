export default {
  async fetchData(){
    try {
      const response = await fetch("./data.json");
      console.log(response);
      const responseJson = await response.json();
      console.log(responseJson);
      return responseJson.slider;
    } catch (error) {
      console.error(error);
    }
  }
};
