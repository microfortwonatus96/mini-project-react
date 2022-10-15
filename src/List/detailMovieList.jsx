import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../List/List.css";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { API_KEY } from "../Form/Api_Key";
import { URL_TMDB } from "../Form/Api_Key";
import { SESSION_ID } from "../Form/Api_Key";
import Footer from "../Footer/Footer";

const MovieList = () => {
  const [details, setDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios({
      method: "get",
      url: `${URL_TMDB}/list/${id}?api_key=${API_KEY}&language=en-US`,
    })
      .then((response) => {
        console.log("cek:", response);
        console.log("cek1:", response.data.items);
        setDetail(response.data.items);

        // window.location.reload()
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleDelete = (id) => {
    if (window.confirm("are you sure you want to delete?")) {
      axios({
        method: "post",
        //   url: `${URL_TMDB}/list/${id}/remove_item?api_key=${API_KEY}&session_id=${localStorage.getItem(
        //   "sessionID"
        // )}`,
        url: `${URL_TMDB}/list/${id}/remove_item?api_key=${API_KEY}&session_id=${SESSION_ID}`,
        data: {
          media_id: id,
        },
      })
        .then((response) => {
          console.log("test:", response);
          window.location.reload();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <>
      <div style={{ margin: "auto" }}>
        <Navbar />
      </div>

      <div className="container">
        <div className="img-center">
          <div className="grid-img">
            {details &&
              details.map((detail) => {
                return (
                  <>
                    <div className="detail-img" key={detail.id}>
                      <img
                        src={`https://image.tmdb.org/t/p/w300/${
                          detail && detail.poster_path
                        }`}
                        alt={`${detail && detail.title} Poster`}
                      />
                      <div className="d-block">
                        <button
                          style={{ width: "100%" }}
                          className="btn btn-danger f-12"
                          onClick={() => handleDelete(detail.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default MovieList;
