import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import socialImg from './../../../assets/icons/rectangle15.png'
import timerImg from './../../../assets/icons/Rectangle 14.png'
import {AnimatePresence, motion} from "framer-motion"
import {S} from './Works_Styles'


import {Container} from "../../../components/Container";
import {TabMenu, TabStatusType} from "./tabmenu/TabMenu";
import {Work} from "./work/Work";



const tabsItems  : Array<{status: TabStatusType,title: string}> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "Landing page",
        status: "landing"
    },

    {
        title: "React ",
        status: "react"
    },
    {
        title: "spa",
        status: "spa"
    },

]

const worksData = [
    {
        title : "Social Network",
        src: socialImg,
        text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim." +
                " Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "spa",
        id: 1
    },

    {
        title : "Timer",
        src : timerImg,
        text : "orem ipsum dolor sit amet, consectetur adipisicing " +
            "elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim." +
            "    Lorem ipsum dolor sit amet, " +
                "consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim.",
        type: "react",
        id: 2
    },

    {
        title : "Social Network",
        src: socialImg,
        text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim." +
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "spa",
        id: 3
    },

    {
        title : "Timer",
        src : timerImg,
        text : "orem ipsum dolor sit amet, consectetur adipisicing " +
            "elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim." +
            "    Lorem ipsum dolor sit amet, " +
            "consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim.",
        type: "react",
        id: 4
    },

    {
        title : "Social Network",
        src: socialImg,
        text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim." +
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "spa",
        id: 5
    },

    {
        title : "Timer",
        src : timerImg,
        text : "orem ipsum dolor sit amet, consectetur adipisicing " +
            "elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim." +
            "    Lorem ipsum dolor sit amet, " +
            "consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim.",
        type: "react",
        id: 6
    },






]

export const Works : React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filtredWorks = worksData

    if (currentFilterStatus === "landing") {
        filtredWorks = worksData.filter(work => work.type==="landing") }
    if (currentFilterStatus === "react") {
        filtredWorks = worksData.filter(work => work.type === "react")
    }
    if (currentFilterStatus === "spa") {
        filtredWorks = worksData.filter(work => work.type === "spa")
    }
    function changeFilterStatus(value: TabStatusType){
        setCurrentFilterStatus(value)
    }
    return (
        <S.Works id={"works"}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems}
                         changeFilterStatus ={changeFilterStatus}
                         currentFilterStatus ={currentFilterStatus}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    <AnimatePresence>
                    {filtredWorks.map((w) => {
                         return(
                             <motion.div style={{ width: "400px", flexGrow: 1,   maxWidth: "540px"}}
                                 layout={true}
                                 initial={{ opacity: 0 }}
                                 animate={{ opacity: 1 }}
                                 exit={{ opacity: 0 }}
                                 key={w.id}


                             >
                                 <Work title={w.title}
                                       text={w.text}
                                       src={w.src}
                                       key={w.id}
                                 />
                             </motion.div>

                         )
                            })}
                    </AnimatePresence>
                </FlexWrapper>

            </Container>

        </S.Works>
    );
};



