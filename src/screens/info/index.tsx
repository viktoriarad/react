import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import { ArticleImage, DescriptionTextInfo, ArticleInfo, ArticleImageRound, InfoWrapper } from '../../components/styled';

const InfoPage: FC = () => {
    return (
        <ScrollView >

            <InfoWrapper>
                <ArticleImage source={require('../../assets/picture2.jpg')} />
                <DescriptionTextInfo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quidem repellat minus labore autem error et dolor quod perspiciatis eaque cum, laborum facilis eveniet aliquam reprehenderit! Accusantium error fugiat nostrum!</DescriptionTextInfo>
                <DescriptionTextInfo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quidem repellat minus labore autem error et dolor quod perspiciatis eaque cum, laborum facilis eveniet aliquam reprehenderit! Accusantium error fugiat nostrum!</DescriptionTextInfo>
                <ArticleImage source={require('../../assets/picture3.jpg')} />

                <ArticleInfo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quidem repellat minus labore autem error et dolor quod perspiciatis eaque cum, laborum facilis eveniet aliquam reprehenderit! Accusantium error fugiat nostrum!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quidem repellat minus labore autem error et dolor quod perspiciatis eaque cum, laborum facilis eveniet aliquam reprehenderit! Accusantium error fugiat nostrum!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quidem repellat minus labore autem error et dolor quod perspiciatis eaque cum, laborum facilis eveniet aliquam reprehenderit! Accusantium error fugiat nostrum!</ArticleInfo>
                <ArticleImageRound source={require('../../assets/picture4.jpg')} />
                <ArticleImageRound source={require('../../assets/picture5.jpg')} />
                <ArticleImageRound source={require('../../assets/picture2.jpg')} />
                <ArticleInfo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quidem repellat minus labore autem error et dolor quod perspiciatis eaque cum, laborum facilis eveniet aliquam reprehenderit! Accusantium error fugiat nostrum!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quidem repellat minus labore autem error et dolor quod perspiciatis eaque cum, laborum facilis eveniet aliquam reprehenderit! Accusantium error fugiat nostrum!</ArticleInfo>
            </InfoWrapper>

        </ScrollView >
    );
};

export default InfoPage;