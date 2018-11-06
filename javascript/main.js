$(function() {

    $("#shake").click(function() {
        num_dice = $("#num_dice").val();
        num_sides = $("#num_sides").val();
        nums = [];
        i = 0;
        while (i < num_dice) {
            nums.push(Math.floor(Math.random() * num_sides) + 1);
            i++;
        }
        dice_vals = $("#dice_vals");
        dice_vals.empty();
        total = 0
        $(nums).each(function() {
            total += this
            dice_vals.append("<span>"+this+"</span><br>");
        });
        $("#total").empty().append(total);
	});
});