import { gql, useQuery } from "@apollo/client";

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

interface Props {
  topic?: string;
}
export default function TopicPage({ topic = 'react' }: Props) {
  const { loading, error, data } = useQuery(TOPIC_QUERY, {
    variables: { search: topic }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="TopicPage">
      <h1>{topic}</h1>
      <ul>
        {data.topic.relatedTopics.map((rtopic: Topic) => (
        <li>
          <a href={`#${rtopic.name}`}>{rtopic.name}</a>
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