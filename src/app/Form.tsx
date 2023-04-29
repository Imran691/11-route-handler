"use client";
import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  // const a = useForm()    //useForm() returns an object and we are saving it in a variable

  // we can destructure useForm as well and access the elements directly
  // here "register", "handleSubmit" and "formState" elements of useForm are destructured and further "errors" elemant of formState is destructured. A sort of double de-structuring.
  const {
    register,
    handleSubmit, // a fuction for validation
    formState: { errors },
  } = useForm();

  console.log(`errors: `, errors); // to see errors in console
  

  const formHandler = async (data: any) => {
    console.log(data);

    await fetch ("/api/formHandler",   // we need not to pass complete URL while we call API in same project
     {method:"POST",
      body:JSON.stringify(data)
    }) 

  };

// console.log(register("password")); //register function 

  return (
    <div>
      {/* after validation by handleSubmit, submitHandler function will be called */}
      <form
        className="m-10 space-x-8 flex"
        onSubmit={handleSubmit(formHandler)}
      >
        <div>
          <label>Email</label>
          <input
          className="bg-slate-700"
            type="email"
            placeholder="Enter email"
            {...register("email")} //with spread operator we have added all the properties of register function - "register" function returns an object and has a unique parameter with each input filed and it checks vslidation errors and changes made.
          />
        </div>
        <div>
          <label>Password</label>
          <input
            className="bg-slate-700"
            type="password"
            placeholder="Enter password"
            {...register("password", {required:true})}
          />
          {errors.password && errors.password.type === "required" && (
            <p>password is required</p>
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
