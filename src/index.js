import React from "react";
import ReactDOM from "react-dom/client";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";

const MyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Registration Form</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border p-4 rounded shadow"
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            FullName
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            id="name"
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.name.message}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            id="email"
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="confirmemail" className="form-label">
            Confirm Email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            id="email"
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
        </div>
        <fieldset className="mb-3">
          <legend className="form-label">Gender</legend>
          <div className="form-check">
            <input
              {...register("gender", { required: "Gender is required" })}
              id="male"
              type="radio"
              value="Male"
              className={`form-check-input ${
                errors.gender ? "is-invalid" : ""
              }`}
            />
            <label htmlFor="male" className="form-check-label">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              {...register("gender", { required: "Gender is required" })}
              id="female"
              type="radio"
              value="Female"
              className={`form-check-input ${
                errors.gender ? "is-invalid" : ""
              }`}
            />
            <label htmlFor="female" className="form-check-label">
              Female
            </label>
          </div>
          <div className="form-check">
            <input
              {...register("gender", { required: "Gender is required" })}
              id="other"
              type="radio"
              value="Other"
              className={`form-check-input ${
                errors.gender ? "is-invalid" : ""
              }`}
            />
            <label htmlFor="other" className="form-check-label">
              Other
            </label>
          </div>
          {errors.gender && (
            <div className="invalid-feedback d-block">
              {errors.gender.message}
            </div>
          )}
        </fieldset>
        <fieldset className="mb-3">
          <legend className="form-label">Education</legend>
          <div className="form-check">
            <input
              {...register("education", {
                required: "At least one education level is required",
              })}
              id="highschool"
              type="checkbox"
              value="High School"
              className="form-check-input"
            />
            <label htmlFor="highschool" className="form-check-label">
              High School
            </label>
          </div>
          <div className="form-check">
            <input
              {...register("education")}
              id="bachelor"
              type="checkbox"
              value="Bachelor's Degree"
              className="form-check-input"
            />
            <label htmlFor="bachelor" className="form-check-label">
              Bachelor's Degree
            </label>
          </div>
          <div className="form-check">
            <input
              {...register("education")}
              id="master"
              type="checkbox"
              value="Master's Degree"
              className="form-check-input"
            />
            <label htmlFor="master" className="form-check-label">
              Master's Degree
            </label>
          </div>
          <div className="form-check">
            <input
              {...register("education")}
              id="phd"
              type="checkbox"
              value="PhD"
              className="form-check-input"
            />
            <label htmlFor="phd" className="form-check-label">
              PhD
            </label>
          </div>
          {errors.education && (
            <div className="invalid-feedback d-block">
              {errors.education.message}
            </div>
          )}
        </fieldset>
        <div className="mb-3">
          <label htmlFor="Password" className="form-label">
            Password
          </label>
          <input
            {...register("password", { required: "Password is required" })}
            id="password"
            type="Password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password.message}</div>
          )}
        </div>{" "}
        <div className="mb-3">
          <label htmlFor="confirmpassword" className="form-label">
            Confirm Password
          </label>
          <input
            {...register("password", {
              required: "Password is required",
            })}
            id="password"
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password.message}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="Comment" className="form-label">
            Comment
          </label>
          <textarea
            {...register("message", { required: "Message is required" })}
            id="message"
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
          ></textarea>
          {errors.message && (
            <div className="invalid-feedback">{errors.message.message}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyForm;
// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MyForm />
  </React.StrictMode>
);

// React before 18
// ReactDOM.render(<App />, document.getElementById("root"));
