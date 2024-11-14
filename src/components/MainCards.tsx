import { skills } from "@/constants";
import Card from "./ui/Card";
import SkillsCards from "./ui/SkillsCards";
const MainCards = () => {
  return (
    <div className="grid grid-cols-6 grid-rows-4 gap-5 w-[100%] h-[100%]">
      <Card title={"Experience"} className={"col-span-2 row-span-3"}>
        <h3></h3>
      </Card>
      <Card title={"Kind Words"} className={"col-span-2 row-start-4"}>
        <h3></h3>
      </Card>
      <Card title={"Time"} className={""}>
        <h3></h3>
      </Card>
      <Card title={"Mode"} className={""}>
        <h3></h3>
      </Card>
      <Card title={"Skills"} className={"col-start-3 col-span-2 row-span-2"}>
        <div className="p-5 relative   h-[300px]">
          {skills.map(({ title, color, positions, animation }) => {
            return (
              <SkillsCards
                key={title}
                title={title}
                color={color}
                positions={positions}
                animation={animation}
              />
            );
          })}
        </div>
      </Card>
      <Card title={"Years Pro"} className={"col-start-3 row-start-4"}>
        <h3></h3>
      </Card>
      <Card title={"CTs"} className={"col-start-4 row-start-4"}>
        <h3></h3>
      </Card>
      <Card
        title={"Projects"}
        className={"col-span-2 row-span-2 col-start-5 row-start-1"}
      >
        <h3></h3>
      </Card>
      <Card title={"Education"} className={"col-span-2 row-span-2"}>
        <h3></h3>
      </Card>
    </div>
  );
};

export default MainCards;
