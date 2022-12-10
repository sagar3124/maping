import data from "../Dummy.jsx";

function Apps() {
  return (
    <>
      <div
        style={{
          border: "1px solid black",
          margin: "20px",
          width: "10%",
          height: "1030px",
          padding: "0 90px",
        }}
      >
        {data.map((datas) => {
          return (
            <>
              <div
                style={{
                  marginBottom: "30px",
                }}
              >
                <p1>
                  {datas.id} <br />
                </p1>

                <p1>
                  {datas.name} <br />
                </p1>
                <p1>
                  {datas.work} <br />
                </p1>
                <p1>
                  {datas.email} <br />
                </p1>
                <p1>
                  {datas.dob} <br />
                </p1>
                <p1>
                  {datas.city} <br />
                </p1>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Apps;
