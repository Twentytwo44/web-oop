import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function RegisterCard() {
    
    return (
        <>
    <div className="flex border-2 w-[632px] h-[625px] flex-col mx-auto mt-[130px] bg-[#F5F4F4] rounded-md">
        <h1 className="text-center text-5xl p-[25px]">Sign up</h1>
        <div className="ml-auto mr-auto gap-10">
          <div className="form-control mb-3">
              <label className="label">
                <span className="label-text">Email</span>
              
              </label>
              <input type="text" placeholder="Enter your email" className="input input-bordered h-[60px] w-[535px] " />
              
          </div>

          <div className="form-control mb-3 flex-row gap-[35px]">
             <div>
                <label className="label">
                    <span className="label-text">Name</span>
                
                </label>
                <input type="text" placeholder="name" className="input input-bordered w-[250px]" />
              
              
             </div>
             <div>
                <label className="label">
                    <span className="label-text">Surname</span>
                
                </label>
                <input type="text" placeholder="surname" className="input input-bordered w-[250px]" />
              
              
             </div>
          </div>



          <div className="form-control mb-3">
              <label className="label">
                <span className="label-text">Password</span>
              
              </label>
              <input type="password" placeholder="Enter your password" className="input input-bordered h-[60px] w-[535px] " />
              
          </div>
          <div className="form-control m-auto">
              <label className="label">
                <span className="label-text">Confirm password</span>
              
              </label>
              <input type="password" placeholder="Confirm your password" className="input input-bordered h-[60px] w-[535px] " />
              
          </div>
        </div>
       
        <div className="flex ml-auto mr-auto mt-5 mb-1">
            <button className="text-[25px] w-[150px] h-[60px] bg-[#B52245] rounded-full text-white border-[#B52245]">Login</button>
        </div>
        <div className="text-center">
            <Link className="text-center" to="/">Don't have an account? <span className="underline hover:decoration-2">Sign up</span></Link>
        </div>



    </div>
        </>
       
    );
}


export default RegisterCard;
