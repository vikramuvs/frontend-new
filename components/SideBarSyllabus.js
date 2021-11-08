import { useEffect, useState } from "react";

function SideBarSyllabus({ deptId }) {
  const [st, setSt] = useState([]);

  useEffect(async () => {
    const s = await fetch(`/api/dept/${deptId}`, { method: "GET" });
    setSt(s);
    console.log(s);
  }, []);

  return (
    <ul className="list-disc">
      {st.map((syllabus) => (
        <li>
          {" "}
          <a href={syllabus.link}>{syllabus.title}</a>{" "}
        </li>
      ))}
    </ul>
  );
}

export default SideBarSyllabus;
