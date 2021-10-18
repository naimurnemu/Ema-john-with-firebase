import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../context/useAuth";
import "./Shipping.css";

const Shipping = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const onsubmit = (data) => console.log(data);
  return (
    <div className="shipping-container">
      <form className="shipping-form" onSubmit={handleSubmit(onsubmit)}>
        {/*optional field*/}
        <input
          defaultValue={user.displayName}
          placeholder="Your name"
          {...register("name")}
        />

        {/* required */}
        <input defaultValue={user.email} {...register("email", { required: true })} />

        {/* More info */}
        <input placeholder="Address" {...register("address")} />
        <input placeholder="City" {...register("city")} />
        <input placeholder="Contact number" {...register("phone")} />

        {/* errors return*/}
        {errors.email && <span className="error">This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default Shipping;
