//Liberiras
import React from 'react';
import {List} from 'antd';


export default function ListSessions(props){
    const {sessions} = props;
    return(
        <div>
           <Sessions sessions={sessions}/>
        </div>
    );
}

function Sessions(props) {
    const { sessions } = props;
    return (
        <List
            className="sessions"
            itemLayout="horizontal"
            dataSource={sessions}
            renderItem={session => <Session
                session={session}

            />}
        />
    );
}

function Session(props) {
    const {session} = props;
    console.log(session);
    return (
        <List.Item>
            <List.Item.Meta
                title={`
                    ${session.Game.nameGame} -->
                    ${session.Game.levels[0].parameters[0].name} /
                    ${session.Game.levels[0].parameters[0].value} -->
                    ${session.Game.levels[0].parameters[1].name} /
                    ${session.Game.levels[0].parameters[1].value}
                `}
            />
        </List.Item>
    );
}