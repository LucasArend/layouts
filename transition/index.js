#app
  transition(name="page", :duration="1300")
    .page(:is="page" @change-page="onChangePage")
    
script#start(type="text/x-template")
  .start
    .inner 
      h1.title.enter-1 Page Transition Demo
      .button-wrapper.enter-2
        button.button.button-start(
          type="button" 
          @click="$emit('change-page', 'next')"
        ) 
          span.button-text Start!
    
script#next(type="text/x-template")
  .next
    .inner
      h1.title.enter-1 You may want to use...
      ul.next-list
        li.enter-2 &lt;transition&gt; built-in component of Vue.js
        li.enter-3 CSS Transition/Animation for simple animation combinations
        li.enter-4 JavaScript hooks for complex animation      
      .button-wrapper.enter-5
        button.button.button-next(
          type="button"
          @click="$emit('change-page', 'start')"
        )
          span.button-text Back