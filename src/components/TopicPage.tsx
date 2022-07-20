import { gql, useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";

const TOPIC_QUERY = gql`
  query FindTopic($search: String!) {
    topic(name: $search) {
      id
      name
      stargazerCount
      relatedTopics(first: 10) {
        id name stargazerCount
      }
    }
  }
`

export default function TopicPage() {
  const { topic } = useParams()
  const { loading, error, data } = useQuery<{topic: TopicWithRelatedTopics}>(TOPIC_QUERY, {
    variables: { search: topic }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="TopicPage">
      <h1>{topic}</h1>
      <ul>
        {data!.topic.relatedTopics.map(rtopic => (
        <li>
          <Link to={`/${rtopic.name}`}>{rtopic.name}</Link>
          <span> ⭐️ {rtopic.stargazerCount}</span>
        </li>
        ))}
      </ul>
    </div>
  )
}

interface Topic {
  id: number;
  name: string;
  stargazerCount: number;
}

interface TopicWithRelatedTopics extends Topic {
  relatedTopics: Topic[]
}