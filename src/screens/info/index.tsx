import React, { FC } from 'react';
import { Text, View, Button } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../constans/Colors';

const InfoText = styled.Text`
    margin: 120px 20px;
    font-size: 16px;
    color: ${Colors.black};
`;

interface IInfoProps {
    name: string;

}

const Info: FC<IInfoProps> = props => {
    return (
        <View>
            <InfoText>Info {props.name}</InfoText>
            {/* <NewButton /> */}
        </View>

    );
};


// const NewButton = () => {
//     const handleClick = () => {
//         console.log('click')
//     }
//     return (
//         <View>
//             <Button
//                 title="Press me"
//                 onPress={handleClick}
//             />
//         </View>

//     );
// };


export default Info;
