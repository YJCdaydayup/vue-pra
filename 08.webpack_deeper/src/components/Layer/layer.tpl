<div class="layer">
	<div>this is <%= name %> layer</div>

    <div>
	<% for (var i=0;i<arr.length;i++) { %>
		<%= '<div>' + arr[i] + '</div>' %>
	<% } %>
	</div>
</div>