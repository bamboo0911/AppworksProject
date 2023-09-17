import useSWRFetch from "../useSWRFetch";

// `https://api.projectszero.tech/skills/${studentId}` // this is the endpoint we want to fetch from

const useSkills = (studentId) => {
  const { data } = useSWRFetch(`https://api.projectszero.tech/skills/${studentId}`);
  return {
    labels: data && Object.keys(data),
    values: data && Object.values(data)
  };
};

export default useSkills;



