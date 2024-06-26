import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { deleteEmail, getDetailEmail } from "../../services/emailService";

export default function EmailDetail() {
   const [email, setEmail] = useState({});

   const navigate = useNavigate();
   const { id } = useParams();

   useEffect(() => {
      async function fetchData() {
         const { data } = await getDetailEmail(id);
         if (data) setEmail(data.data);
      }

      fetchData();
   }, [id]);

   const deleteOne = async (id) => {
      const { data } = await deleteEmail(id);
      if (data) navigate("/admin/email");
   };

   return (
      <div
         className="tertiary"
         style={{ borderRadius: "10px" }}
         data-aos="fade-up"
      >
         <div
            className="d-flex py-3 px-2 justify-content-between align-items-center"
            style={{
               borderRadius: "10px",
               boxShadow: "0px 10px 10px 2px #0b192f",
               zIndex: "999",
            }}
         >
            <Link to="/admin/email" className="cool-btn-dark">
               <i className="fa-solid fa-arrow-left"></i>
            </Link>
            <h3 className="m-0">{email.subject}</h3>
            <span
               className="cool-btn-dark"
               onClick={() => deleteOne(email._id)}
            >
               <i className="fa-solid fa-trash"></i>
            </span>
         </div>

         <div className="mt-3 p-4">
            <div style={{ marginBottom: "10px" }}>
               <h2
                  className="font-primary"
                  style={{ textAlign: "center", fontWeight: "bold" }}
               >
                  Email from Portfolio
               </h2>
            </div>
            <div className="mb-4">
               <h4 className="font-secondary fw-bold">Message: </h4>
               <div
                  className="bg-white"
                  style={{
                     borderRadius: "10px",
                     padding: "10px",
                     wordWrap: "break-word",
                  }}
               >
                  <p
                     className="text-black"
                     style={{ fontSize: "15px", whiteSpace: "pre-wrap" }}
                  >
                     {email.message}
                  </p>
               </div>
            </div>
            <div>
               <p className="m-0 font-secondary" style={{ fontSize: "15px" }}>
                  from {email.name},<br />
                  {email.email}
               </p>
            </div>
         </div>
      </div>
   );
}
