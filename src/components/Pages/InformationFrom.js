import React, { createContext, useReducer } from "react";

export const From_Context = createContext();
const InformationFrom = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    education: "",
    PCs: 0,
    term: false,
  };

  const reducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
      case "INPUT":
        return { ...state, [action.payload.name]: action.payload.value };

      case "TOGGLE":
        return { ...state, term: !state.term };

      case "INCREMENT":
        return { ...state, PCs: state.PCs + 1 };

      case "DECREMENT":
        return { ...state, PCs: state.PCs - 1 };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const submit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <div>
      <div className="border-2 bg-slate-100 p-3 rounded-md  w-full">
        <form onSubmit={submit}>
          <div className="py-3">
            <label className=" text-left font-medium" htmlFor="firstName">
              First Name
            </label>
            <br />
            <input
              className="  input border-2 border-gray-400 rounded-md w-8/12"
              type="text"
              name="firstName"
              id="firstName"
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
          </div>

          <div className="py-3">
            <label className=" text-left font-medium" htmlFor="lastName">
              Last Name
            </label>
            <br />
            <input
              className="  input border-2 border-gray-400 rounded-md w-8/12"
              type="text"
              name="lastName"
              id="lastName"
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
          </div>

          <div className="py-3">
            <label className=" text-left font-medium" htmlFor="email">
              Email
            </label>
            <br />
            <input
              className="  input border-2 border-gray-400 rounded-md w-8/12"
              type="email"
              name="email"
              id="email"
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
          </div>

          <div className="py-3">
            <label className=" text-left font-medium" htmlFor="First-Name">
              gender
            </label>
            <br />
            <div className=" flex">
              <div className=" items-center">
                <input
                  type="radio"
                  value="male"
                  name="gender"
                  id="male"
                  onClick={(e) =>
                    dispatch({
                      type: "INPUT",
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                />
                <label className=" mx-1" htmlFor="male">
                  Male
                </label>
              </div>
              <div className=" items-center">
                <input
                  type="radio"
                  value="female"
                  name="gender"
                  id="female"
                  onClick={(e) =>
                    dispatch({
                      type: "INPUT",
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                />
                <label className=" mx-1" htmlFor="female">
                  Female
                </label>
              </div>
              <div className=" items-center">
                <input
                  type="radio"
                  value="Custom"
                  name="gender"
                  id="Custom"
                  onClick={(e) =>
                    dispatch({
                      type: "INPUT",
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                />
                <label className=" mx-1" htmlFor="Custom">
                  Custom
                </label>
              </div>
            </div>

            <div className=" py-3">
              <label className=" mx-1" htmlFor="education">
                Education
              </label>
              <br />
              <select
                className="  input border-2 border-gray-400 rounded-md w-8/12"
                name="education"
                id="education"
                onChange={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              >
                <option value="SSC" key="">
                  SSC
                </option>
                <option value="HSC" key="">
                  HSC
                </option>
                <option value="UnderGraduate" key="">
                  UnderGraduate
                </option>
                <option value="graduate" key="">
                  Graduate
                </option>
              </select>
            </div>

            <div className=" flex gap-2 py-3">
              <label className=" mx-1">PCs</label>
              <div>
                <span
                  onClick={() => dispatch({ type: "DECREMENT" })}
                  className=" cursor-pointer px-3 rounded-lg bg-slate-300"
                >
                  -
                </span>
              </div>
              <div>
                <span>{state.PCs}</span>
              </div>
              <div>
                <span
                  onClick={() => dispatch({ type: "INCREMENT" })}
                  className=" cursor-pointer px-3 rounded-lg bg-slate-300"
                >
                  +
                </span>
              </div>
            </div>

            <div className=" flex gap-2 py-3">
              <input
                type="checkbox"
                class="form-check-input"
                name="checkbox"
                id="checkbox"
                value="checkbox"
                onClick={() => dispatch({ type: "TOGGLE" })}
              />
              <br />
              <label className=" mx-1" htmlFor="education">
                Trams & Condition
              </label>
            </div>

            <div>
              <button
                className=" px-3 rounded-lg text-xl font-medium uppercase bg-green-600"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InformationFrom;
