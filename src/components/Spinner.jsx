import React, { Component } from 'react'

class Spinner extends Component {
render() {
	return (
    <div class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-gray-400 rounded-full" role="status" aria-label="loading">
        <span class="sr-only">Loading...</span>
    </div>
	)
}
}

export default Spinner;
