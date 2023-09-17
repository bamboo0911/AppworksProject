import axios from "axios";
import { useCookies } from "react-cookie";

const usePostSkills = () => {
  const [, setCookie] = useCookies(["studentId"]);
  return async (studentId, skills) => {
    try {
      await axios.post(
        `https://api.projectszero.tech/skills/${studentId}`,
        skills,
        {
          headers: {
            "Content-Type": "application/json" // 设置请求头
          }
        }
      );
      setCookie("studentId", studentId);
      alert("送出成功");
    } catch (error) {
      console.log(skills); // 添加这一行 //Chat GPT
      console.log(error);
      console.log(studentId)
      alert(error);
    }
  };
};

export default usePostSkills;
