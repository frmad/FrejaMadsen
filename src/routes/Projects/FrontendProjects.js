import React from 'react';
import ProjectCard from './ProjectCard';
import bachelor from '../../figmaimages/Bachelor.png';
import healthHifi from '../../figmaimages/Health-HI-FI.png';
import vroomLofi from '../../figmaimages/Vroom-LO-FI.png';
import vroomHifi from '../../figmaimages/Vroom-HI-FI.png';
import xpenceLofi from '../../figmaimages/Xpence-LO-FI.png';
import xpenceVideo from '../Projects/video/XRecorder_Edited_08012024_163630 (1).mp4';
import vroomVideo from '../Projects/video/XRecorder_Edited_30102023_152434 (1).mp4';
import siesta from '../../../src/figmaimages/siesta.png';

const FrontendProjects = () => {
    return (
        <div>
            <h4 className="categoryTitle">Frontend-Based Projects</h4>
            <div className="row">
                <ProjectCard
                    title="Car Rental App - School Group Project"
                    description="A React-based application for managing car rentals"
                    tech="Developed with React, Typescript and Figma"
                    linkText="View Git Repository"
                    linkUrl="https://github.com/Nolle10/value-vroom"
                    external={true}
                    imageUrl={vroomHifi}
                    figmaUrlLofi="https://www.figma.com/design/0WAOa5zT7WJHc1kdYUaCRG/Vroom?node-id=0-1&t=N6SMGgwCwcwqYgVW-0"
                    figmaUrlHifi="https://www.figma.com/design/fpMfKhJLRg11e6qOdu792D/VALUEVROOM?node-id=0-1&t=XDnT9Ylswk5zuY9m-0"
                    video={vroomVideo}
                />
                <ProjectCard
                    title="Shared Payment App - School Group Project"
                    description="A Kotlin-based application for managing shared expenses"
                    tech="Developed with Kotlin and Figma"
                    linkText="View Git Repository"
                    linkUrl="https://github.com/frmad/XPence-kotlin"
                    external={true}
                    imageUrl={xpenceLofi}
                    figmaUrlLofi="https://www.figma.com/design/6dqmz8sjOMELd6PVBGn4uL/XPence-Kotlin?node-id=47-6&t=opFcRk4xAuS2cUs2-0"
                    video={xpenceVideo}
                />
                <ProjectCard
                    title="Calorie Tracking App - School Group Project"
                    description="A React-based app for tracking calorie intake"
                    tech="Developed with React, Typescript and Figma"
                    linkText="View Git Repository"
                    linkUrl="https://github.com/frmad/Bachelor"
                    external={true}
                    imageUrl={bachelor}
                    figmaUrlHifi="https://www.figma.com/design/bDSc71XbVLNaw6S7LoidG1/Bachelor-Project-SDU?node-id=874-11707&t=JCiAcDbR84djmBAa-0"
                />
                <ProjectCard
                    title="Health Tracking App - School Group Project"
                    description="An app design for tracking health metrics and finding recipes"
                    tech="Developed with Figma"
                    external={true}
                    imageUrl={healthHifi}
                    figmaUrlHifi="https://www.figma.com/design/dgOxi0MmOvQDTiJbbmo9wW/Final-2?node-id=0-1&t=FgpIsrmtcPsLbOfI-0"
                />
                <ProjectCard
                    title="Mental Health and Productivity App - School Group Project"
                    description="An app design for helping individuals schedule their day and improve their health and productivity using AI."
                    tech="Developed with Figma"
                    external={true}
                    imageUrl={siesta}
                    figmaUrlHifi="https://www.figma.com/design/bi5rjnvqjt8X648DsfKQuy/Siesta?node-id=0-1&t=T38LFjjZeCQCGQRz-1"
                />
            </div>
        </div>
    );
};

export default FrontendProjects;
