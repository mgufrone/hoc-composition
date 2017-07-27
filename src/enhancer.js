import React, {Component} from 'react';
export const loadData = (url, callback) => {
    return function(DataComponent, LoadingComponent, ErrorComponent = null) {
        return class extends Component {
            state = {
              isLoading: false
            }
            componentWillMount() {
              this.setState({
                isLoading: true,
                data: [],
              }, () => this.fetchData());
            }

            fetchData() {
                fetch(url)
                .then(response => response.json())
                .then(json => this.setState({isLoading: false, data: callback(json), error: null}))
                .catch((e) => console.error(e));
            }

            renderLoader() {
                return (<LoadingComponent {...this.state}/>);
            }


            renderData() {
                return (<DataComponent data={this.state.data} />)
            }

            renderError() {
                return (ErrorComponent ? <ErrorComponent /> : <div>
                  {this.state.error}
                </div>)
            }

            renderResponse() {
                return this.state.error ? this.renderError() : this.renderData()
            }

            render() {
                return (
                    <div>
                      {this.renderLoader()}
                      {!this.state.isLoading && this.renderResponse()}
                    </div>
                );
            }
        }
    }
};
export const withData = (DumbComponent, callback) => {
  return class extends Component {
      state = {
        isLoading: false
      }
      componentWillMount() {
        this.setState({
          isLoading: true,
          data: [],
        }, () => this.fetchData());
      }

      fetchData() {
          fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(json => this.setState({isLoading: false, data: callback(json), error: null}))
          .catch((e) => console.error(e));
      }

      renderLoader() {
          return (<div>Loading data...</div>);
      }


      renderData() {
          return (<DumbComponent data={this.state.data} />)
      }

      renderError() {
          return (<div>
            {this.state.error}
          </div>)
      }

      renderResponse() {
          return this.state.error ? this.renderError() : this.renderData()
      }

      render() {
          return this.state.isLoading ? this.renderLoader() : this.renderResponse();
      }
  }
}
