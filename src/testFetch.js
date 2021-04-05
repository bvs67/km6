import React from 'react'

class TestFetch extends React.Component {
  state = {
    news: null,
    isLoading: false,
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    fetch('http://localhost:3000/data/data.json')
      .then(response => {
        return response.json()
      })
      .then(data => {
        //setTimeout(() => {
          this.setState({ isLoading: false, news: data });
          // console.log(this.state.news);
        //}, 1000)
      })
  }

  render() {
    const { news, isLoading } = this.state
    console.log('App news: ', news);

    return (
      <React.Fragment>
        <h3>Таблица чеков</h3>
        {isLoading && <p>Загружаю...</p>}
        {Array.isArray(news) && {news} }
      </React.Fragment>
    )
  }
}

export { TestFetch }
