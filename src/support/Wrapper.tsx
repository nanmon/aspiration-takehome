import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { MemoryRouter } from "react-router-dom";
import { TopicWithRelatedTopics, TOPIC_QUERY } from "../graphql/topic";

const mocks: MockedResponse[] = [
  {
    request: {
      query: TOPIC_QUERY,
      variables: {
        search: "react",
      },
    },
    result: {
      data: {
        topic: {
          id: "MDU6VG9waWNh",
          name: "react",
          stargazerCount: 2,
          relatedTopics: [
            {
              id: "MDU6VG9waWNh3",
              name: "vue",
              stargazerCount: 4,
            },
          ],
        } as TopicWithRelatedTopics,
      },
    },
  },
  {
    request: {
      query: TOPIC_QUERY,
      variables: {
        search: "angular",
      },
    },
    result: {
      data: {
        topic: {
          id: "MDU6VG9waWNh2",
          name: "angular",
          stargazerCount: 3,
          relatedTopics: [],
        } as TopicWithRelatedTopics,
      },
    },
  },
  {
    request: {
      query: TOPIC_QUERY,
      variables: {
        search: "vue",
      },
    },
    result: {
      data: {
        topic: {
          id: "MDU6VG9waWNh3",
          name: "vue",
          stargazerCount: 4,
          relatedTopics: [],
        } as TopicWithRelatedTopics,
      },
    },
  },
];
interface Props {
  children: React.ReactNode;
  route?: string;
}
export default function Wrapper({ children, route = "/" }: Props) {
  return (
    <MemoryRouter initialEntries={[route]}>
      <MockedProvider mocks={mocks} addTypename={false}>
        {children}
      </MockedProvider>
    </MemoryRouter>
  );
}
