import { topics, type Topic } from "./topics"
import { writeFile } from "node:fs"

type TopicByMonth = {
  month: string
  topics: Topic[]
  notableTopics: Topic[]
}

const createTopicsByMonth = (topics: Topic[]): TopicByMonth[] => {
  const topicsByMonth: TopicByMonth[] = []
  topics.forEach(topic => {
    const month = topic.date.slice(5, 7)
    const monthIndex = topicsByMonth.findIndex(t => t.month === month)
    // 愚直なコードでごめんね
    if (monthIndex === -1 && topic.isNotable) {
      topicsByMonth.push({ month, notableTopics: [topic], topics: [] })
    }
    if (monthIndex === -1 && !topic.isNotable) {
      topicsByMonth.push({ month, notableTopics: [], topics: [topic] })
    }
    if (monthIndex !== -1 && topic.isNotable) {
      topicsByMonth[monthIndex].notableTopics.push(topic)
    }
    if (monthIndex !== -1 && !topic.isNotable) {
      topicsByMonth[monthIndex].topics.push(topic)
    }
  })
  return topicsByMonth
}

const sortByDate = (topics: TopicByMonth[]): TopicByMonth[] => {
  // 愚直なコードでごめんね
  topics.forEach(topic => {
    topic.topics.sort((a, b) => {
      if (a.date > b.date) return 1
      if (a.date < b.date) return -1
      return 0
    })

    topic.notableTopics.sort((a, b) => {
      if (a.date > b.date) return 1
      if (a.date < b.date) return -1
      return 0
    })
  })

  return topics
}

const main = () => {
  const topicsByMonth = createTopicsByMonth(topics)
  const sortedTopics = sortByDate(topicsByMonth)

  const json = JSON.stringify(sortedTopics, null, 2)

  writeFile("./dist/topics.json", json, "utf8", () => {})
}

main()
