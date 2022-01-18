const React = require('react')
const Def = require('./default')

function error404 (){
    return(
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page</p>
                <div>
                    <img src="/images/andrew-krueger-3ItdXWpNTLw-unsplash.jpg" alt="compass"/>
                    <div>Photo by <a href="https://unsplash.com/@theandrewkrueger?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Andrew Krueger</a> on <a href="https://unsplash.com/s/photos/free-catching?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404