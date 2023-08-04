using Microsoft.AspNetCore.Razor.TagHelpers;

namespace Server.TagHelpers;

public class Tick : TagHelper
{
    public string? textClass { get; set; } = "";
    public async override Task ProcessAsync(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "div";
        output.Attributes.SetAttribute("class", "d-flex align-items-center mb-2");
        output.Content.SetHtmlContent($"""
            <img alt="tick" src="/imgs/Footer/tick.svg" />
            <span class="ms-3 {textClass}">{(await output.GetChildContentAsync()).GetContent()}</span>
        """);
    }
}
