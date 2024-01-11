$(function() {
  const target = "#blockui-target" // Target element selector for BlockUI

  $("#blockui-trigger-1").on("click", () => {
    $(target).block()
  })

  $("#blockui-trigger-2").on("click", () => {
    $(target).unblock()
  })

  $("#blockui-trigger-3").on("click", () => {
    $(target).block({
      timeout: 1000
    })
  })

  $("#blockui-trigger-4").on("click", () => {
    $(target).block({
      message: "Custom text here...",
      timeout: 1000
    })
  })

  $("#blockui-trigger-5").on("click", () => {
    $(target).block({
      message: `
        <form class="py-2">
          <input type="email" class="form-control mb-3" placeholder="Email">
          <input type="password" class="form-control mb-3" placeholder="Password">
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      `
    })
  })

  $("#blockui-trigger-6").on("click", () => {
    $(target).block({
      overlayCSS: {
        backgroundColor: "#29b6f6"
      },
      css: {
        backgroundColor: "#ffee58"
      },
      timeout: 1000
    })
  })

  $("#blockui-trigger-7").on("click", () => {
    $.blockUI({
      timeout: 1000
    })
  })

  $("#blockui-trigger-8").on("click", () => {
    $(target).block({
      message: `
        <div class="spinner-border text-primary"></div>
        <span class="blockUI blockTitle">Please wait...</span>
      `,
      timeout: 1000
    })
  })

  $("#blockui-trigger-9").on("click", () => {
    $(target).block({
      message: `
        <div class="spinner-grow text-success"></div>
        <span class="blockUI blockTitle">Please wait...</span>
      `,
      timeout: 1000
    })
  })

  $("#blockui-trigger-10").on("click", () => {
    $(target).block({
      message: '<div class="spinner-border text-primary m-0"></div>',
      overlayCSS: {
        backgroundColor: "#fff"
      },
      css: {
        backgroundColor: "transparent"
      },
      timeout: 1000
    })
  })
})
