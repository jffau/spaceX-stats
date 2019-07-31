import React, { Component } from 'react';

const Context = React.createContext();

class Provider extends Component {
  state = {
    launches: ['hi'],
    filteredLaunches: [],
    loading: true,

    // defaults for filter:
    show: 'all',
    success: 'all',
    images: false,
    videos: false
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

const Consumer = Context.Consumer;
export { Provider, Consumer, Context };

// client
// .query({
//   query: gql`
//     query LaunchesQuery {
//       launches {
//         flight_number
//         mission_name
//         launch_date_local
//         launch_success
//       }
//     }
//   `
// })
// .then(response => console.log(response.data.launches));
