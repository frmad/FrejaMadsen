import React from 'react';
import ProjectCard from './ProjectCard';
import bachelor from '../../Figmaimages/Bachelor.png';
import healthHifi from '../../Figmaimages/Health-HI-FI.png';
import vroomLofi from '../../Figmaimages/Vroom-LO-FI.png';
import vroomHifi from '../../Figmaimages/Vroom-HI-FI.png';
import xpenceLofi from '../../Figmaimages/Xpence-LO-FI.png';


const FrontendProjects = () => {
    return (
        <div>
            <h4 className="categoryTitle">Frontend Projects</h4>
            <div className="row">
                <ProjectCard
                    title="React project"
                    description="Car rental app"
                    tech="School group project"
                    linkText="Link to Git repository"
                    linkUrl="https://github.com/Nolle10/value-vroom"
                    external={true}
                    imageUrl={vroomHifi}
                    figmaUrlLofi="https://www.figma.com/design/0WAOa5zT7WJHc1kdYUaCRG/Vroom?node-id=0-1&t=N6SMGgwCwcwqYgVW-0"
                    figmaUrlHifi="https://www.figma.com/design/fpMfKhJLRg11e6qOdu792D/VALUEVROOM?node-id=0-1&t=XDnT9Ylswk5zuY9m-0"
                />
                <ProjectCard
                    title="Kotlin project"
                    description="Shared payment app"
                    tech="School group project"
                    linkText="Link to Git repository"
                    linkUrl="https://github.com/frmad/XPence-kotlin"
                    external={true}
                    imageUrl={xpenceLofi}
                    figmaUrlLofi="https://www.figma.com/design/6dqmz8sjOMELd6PVBGn4uL/XPence-Kotlin?node-id=47-6&t=opFcRk4xAuS2cUs2-0"
                    //figmaUrlHifi="https://www.figma.com/hifi"
                />
                <ProjectCard
                    title="Bachelor project"
                    description="Calorie tracking app"
                    tech="School group project"
                    linkText="Link to Git repository"
                    linkUrl="https://github.com/frmad/Bachelor"
                    external={true}
                    imageUrl={bachelor}
                    figmaUrlHifi="https://www.figma.com/design/bDSc71XbVLNaw6S7LoidG1/Bachelor-Project-SDU?node-id=874-11707&t=JCiAcDbR84djmBAa-0"
                    //figmaUrlHifi="https://www.figma.com/hifi"
                />
                <ProjectCard
                    title="HCI project"
                    description="Calorie tracking app"
                    tech="School group project"
                    external={true}
                    imageUrl={healthHifi}
                    figmaUrlHifi="https://www.figma.com/design/dgOxi0MmOvQDTiJbbmo9wW/Final-2?node-id=0-1&t=FgpIsrmtcPsLbOfI-0"
                />
            </div>
        </div>
    );
};

export default FrontendProjects;