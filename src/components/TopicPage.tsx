import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useTopicQuery } from "../graphql/topic";
import Error from "./Error";

const Page = styled.div`
  width: 100%;
  max-width: 800px;
  align-self: center;
`;

const TopicList = styled.div`
  margin-left: 32px;
`;

const RelatedTopic = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #30363d;
  padding-bottom: 16px;
`;

const StyledLink = styled(Link)`
  color: white;
`;

export default function TopicPage() {
  const { topic } = useParams();
  const { loading, error, data } = useTopicQuery(topic!);

  const relatedTopics = React.useMemo(() => {
    if (!data) return []
    return data.topic.relatedTopics.map((rtopic) => (
      <RelatedTopic key={rtopic.id}>
        <h2>
          <StyledLink to={`/${rtopic.name}`}>{rtopic.name}</StyledLink>
        </h2>
        <span>⭐️ {rtopic.stargazerCount}</span>
      </RelatedTopic>
    ))
  }, [data])

  if (loading) return <p>Loading...</p>;
  if (error) return <Error error={error}/>;
  return (
    <Page>
      <h1>{topic}</h1>
      <TopicList>
        {relatedTopics}
      </TopicList>
    </Page>
  );
}
