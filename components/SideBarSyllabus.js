function SideBarSyllabus({ syllabus }) {
  return (
    <ul className="list-disc">
      {syllabus.map((syl, id) => {
        return (
          <li key={id}>
            {" "}
            <a href={syl.linkURL}>{syl.linkTitle}</a>{" "}
          </li>
        );
      })}
    </ul>
  );
}

export default SideBarSyllabus;
