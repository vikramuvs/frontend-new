function DeptDetails({ eventData }) {
  console.log(eventData);
  return <div></div>;
}

export async function getStaticPaths() {
  return {
    fallback: true,
    // paths: {
    //   params: { eventId: "1" },
    // },
    paths: ["deptId", "1"],
  };
}

export async function getStaticProps(context) {
  const deptId = context.params.deptId;

  const fetchedData = await fetch(
    "http://localhost:8080/api/v1/vision_mission/",
    {
      method: "GET",
    }
  );

  return {
    props: {
      eventData: {
        id: fetchedData.id,
        mission: fetchedData.mission,
        vision: fetchedData.vision,
      },
    },
  };
}

export default DeptDetails;
