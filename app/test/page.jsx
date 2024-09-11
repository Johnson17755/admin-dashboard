
const page = () => {
    const handleForm = async (FormData) =>{
    "use server";
    console.log(FormData)
    const username = FormData.get("username")
    console.log("Hello", username)
    };

  return (
    <div>
        <form action={handleForm}>
            <input type="text" name="username" />
            <button>Send</button>
        </form>
    </div>
  )
}

export default page;