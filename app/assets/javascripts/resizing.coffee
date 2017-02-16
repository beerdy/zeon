$(document).ready () ->
  max_height = 0
  $('.boxservice').each () ->
    current_height = $(this).height()
    max_height = current_height if current_height > max_height
  $('.boxservice').each () ->
    $(this).height max_height